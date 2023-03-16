class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]


  include ActiveStorage::SetCurrent



  # GET /posts
  def index
    @posts = Post.all

     render json: ( @posts.map do |post|
      post.as_json(include: :image).merge(
      image: post.image.url
    )
    end
     )
  end

  # GET /posts/1
  def show
    render json: @post.as_json(include: :image).merge(
      image: @post.image.url
    )
  end

  # POST /posts
  def create
    @post = Post.new(post_params.except(:image))

    if image
      @post.image.attach(image)
    end



  
   

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
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:description, :image, :user_id)
    end
end
