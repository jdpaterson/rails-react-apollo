class PostsController < ApplicationController
  def show
    @post_id = Post.find(params[:id]).id
  end
end
