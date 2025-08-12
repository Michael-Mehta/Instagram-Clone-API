class ProfileController < ApplicationController

    before_action :authenticate_user!

    before_action :set_user


    def show 
    end

    def follow
        current_user.send_follow_request_to(@user)
        @user.accept_follow_request_of(current_user)
    end

    def unfollow
        current_user.unfollow(@user)
    end

    private

    def set_user
        @user = User.find(params[:id])
    end
end