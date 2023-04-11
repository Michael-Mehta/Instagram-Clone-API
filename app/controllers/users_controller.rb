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


      def suggested_users
         # Get a list of all users except the current user and those the current user is already following
         @users = User.where.not(id: current_user.id).where.not(id: current_user.following.pluck(:id))

         # Randomly select 4 users from the list
         @users = @users.order("RANDOM()").limit(4)

         render json: @users.map { |user| 
         {
           username: user.username, id: user.id, avatar_url: url_for(user.avatar)
           } 
          }
        
      end
     
    
end
