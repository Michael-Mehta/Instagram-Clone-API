class UsersController < ApplicationController

    include ActiveStorage::SetCurrent
    
    def show
        @user = User.find_by(id: params[:id])
        render json: { id: @user.id, email: @user.email, username: @user.username, avatar_url: url_for(@user.avatar),
         followers: @user.followers, following: @user.following }
      end


      def update_avatar
        user = User.find(params[:id])
        user.avatar.attach(params[:avatar])
        render json: { message: 'Avatar updated successfully' }
      end
    
      def posts
        @user = User.find(params[:id])
        posts = @user.posts
        render json: posts.map { |post| post.as_json(include: :image).merge(image: post.image.url) }
      end
     
    
end
