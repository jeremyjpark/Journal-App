class PostsController < ApplicationController
  def new
    render json
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render :new
    end
  end

  def index
    render json: Post.all
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy()
    render json: post
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    render json: Post.all
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
