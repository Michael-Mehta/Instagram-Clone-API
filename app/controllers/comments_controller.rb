class CommentsController < ApplicationController
    def create
      @comment = Comment.new(comment_params)
      @comment.post_id = params[:post_id]
  
      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def index
      @comments = Comment.where(post_id: params[:post_id])
  
      render json: @comments
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:content)
    end
  end
 