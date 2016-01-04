class ArticlesController < ApplicationController
  protect_from_forgery :except => [:update, :destroy, :create]

  def index
    render json: Article.all
  end

  def show
    render json: Article.find(params[:id])
  end

  def create
     article = Article.new(title: params[:title], link: params[:link], votes: 0)
     if article.save
       render json: article
    else
      render json: {errors: article.errors.full_message}
    end
  end

  def update
    Article.find(params[:id]).update(votes: params[:votes])
    render json: { head: :ok }
  end

  def destroy
    Article.find(params[:id]).destroy
    render json: { head: :ok }
  end

end
