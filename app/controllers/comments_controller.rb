class CommentsController < ApplicationController
    def create
      @comment = Comment.new(comment_params)
      @comment.post_id = params[:post_id]
      @comment.user = current_user
     
  
      if @comment.save
        render json: @comment.to_json(include: { user: { only: [:id, :username] } })
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def index
      @comments = Comment.where(post_id: params[:post_id])
  
      render json: @comments.to_json(include: { user: { only: [:id, :username] } })
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:content)
    end
  end
 