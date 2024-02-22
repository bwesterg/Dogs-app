class DogsController < ApplicationController
    def index
        @dogs = Dog.all
        render json: @dogs
    end

    def create
        @dog = Dog.create(
            name: params[:name],
            description: params[:description],
            age: params[:age],
            washed: params[:washed],
            exercised: params[:exercised]
        )

        render json: @dog, status: :created
    end

    def destroy
        @dog = Dog.find(params[:id])
        @dog.destroy
        render status: :no_content
    end
end
