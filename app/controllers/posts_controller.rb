class PostsController < ApplicationController
  include ActiveStorage::SetCurrent

  before_action :authenticate_user!
  before_action :set_post, only: %i[ show update destroy ]

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
   
    render json: @post.as_json(include: :image).merge(
      image: @post.image.url 
    )
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
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = current_user.posts.find params[:id]
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:description, :image)
    end
end