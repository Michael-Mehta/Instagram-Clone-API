class UsersController < ApplicationController


    def show
        @user = User.find_by(username: params[:username])
        render json: { id: @user.id, email: @user.email, username: @user.username, avatar_url: url_for(@user.avatar) }
      end


      def update_avatar
        user = User.find(params[:id])
        user.avatar.attach(params[:avatar])
        render json: { message: 'Avatar updated successfully' }
      end
    
     
    
end
