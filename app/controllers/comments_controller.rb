class CommentsController < ApplicationController
    def create
      @comment = Comment.new(comment_params)
      @comment.post_id = params[:post_id]
      @comment.user = current_user
     
  
      if @comment.save
        render json: @comment.to_json(include: :user)
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def index
      comments = Comment.includes(:user).map do |comment|
        {
          id: comment.id,
          content: comment.content,
          created_at: comment.created_at,
          user: {
            id: comment.user.id,
            username: comment.user.username,
            avatar_url: url_for(comment.user.avatar),
          }
        }
      end
    
      render json: comments
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:content)
    end
  end
 