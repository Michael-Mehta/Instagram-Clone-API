class UsersController < ApplicationController
  include ActiveStorage::SetCurrent

  before_action :authenticate_user!, only: [:suggested_users]

  def show
    @user = User.find_by(id: params[:id])

    if @user.nil?
      render json: { error: "User not found" }, status: :not_found and return
    end

    followers = @user.followers || []
    follower_list = followers.map do |follower|
      {
        id: follower.id,
        username: follower.username,
        avatar_url: follower.avatar.attached? ? url_for(follower.avatar) : ActionController::Base.helpers.asset_path('defaultAvatar.jpg')
      }
    end

    following = @user.following || []
    following_list = following.map do |followee|
      {
        id: followee.id,
        username: followee.username,
        avatar_url: followee.avatar.attached? ? url_for(followee.avatar) : ActionController::Base.helpers.asset_path('defaultAvatar.jpg')
      }
    end

    render json: { 
      id: @user.id,
      email: @user.email,
      username: @user.username,
      avatar_url: @user.avatar.attached? ? url_for(@user.avatar) : ActionController::Base.helpers.asset_path('defaultAvatar.jpg'),
      followers: follower_list,
      following: following_list
    }
  end

  def update_avatar
    user = User.find_by(id: params[:id])
    if user.nil?
      render json: { error: "User not found" }, status: :not_found and return
    end

    user.avatar.attach(params[:avatar])
    render json: { message: 'Avatar updated successfully' }
  end

  def posts
    @user = User.find_by(id: params[:id])
    if @user.nil?
      render json: { error: "User not found" }, status: :not_found and return
    end

    posts = @user.posts
    render json: posts.map { |post| post.as_json(include: :image).merge(image: post.image.url) }
  end

  def suggested_users
    unless current_user
      render json: { error: "Unauthorized" }, status: :unauthorized and return
    end

    users = User.where.not(id: current_user.id).where.not(id: current_user.following.pluck(:id))
    users = users.order("RANDOM()").limit(4)

    render json: users.map { |user| 
      {
        username: user.username,
        id: user.id,
        avatar_url: user.avatar.attached? ? url_for(user.avatar) : ActionController::Base.helpers.asset_path('defaultAvatar.jpg')
      }
    }
  end
end
