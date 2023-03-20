
class LikesController < ApplicationController


  def index
    likes = Like.where(post_id: params[:post_id])
    render json: likes, status: :ok
  end

  
  def create
    post = Post.find(params[:post_id])
    like = post.likes.new(user_id: params[:user_id])

    if like.save
      render json: like, status: :created
    else
      render json: like.errors, status: :unprocessable_entity
    end
  end

  def destroy
    like = Like.find_by(post_id: params[:post_id], user_id: params[:user_id])
    like.destroy if like

    head :no_content
  end
end