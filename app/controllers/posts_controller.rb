class PostsController < ApplicationController
  before_action :load_post, only: :show
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create post_params
    if @post.save
      flash[:sucess] = t "sucess.post"
    else
      flash[:danger] = t "sucess.post"
    end
    redirect_to posts_path
  end

  def show
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def load_post
    @post = Post.find_by id: params[:post_id]
    if @post.present?
      @post
    else
      redirect_to posts_path
    end
  end
end
