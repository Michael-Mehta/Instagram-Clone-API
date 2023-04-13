class PostsController < ApplicationController
  include ActiveStorage::SetCurrent

  before_action :authenticate_user!


  # GET /posts
  def index
    @posts = Post.order(created_at: :desc).map do |post|
      {
        id: post.id,
        description: post.description,
        
        user_avatar_url: url_for(post.user.avatar),
        image_url: post.image.url,
        username: post.user.username,
        likes_count: post.likes_count,
        user_id: post.user.id

      }
    end

    render json: @posts
  end

  # GET /posts/1
  def show
   
    post = Post.includes(:comments, :image_attachment).find(params[:id])
    render json: {
      id: post.id,
      description: post.description,
      image: post.image.attached? ? url_for(post.image) : nil,
      comments: post.comments.map do |comment|
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
    }
  end

  # POST /posts
  def create
   
    @post = current_user.posts.build post_params

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    @post = current_user.posts.find params[:id]
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post = current_user.posts.find params[:id]
    @post.destroy
  end

  

  private
    # Use callbacks to share common setup or constraints between actions.
    

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:description, :image)
    end
end