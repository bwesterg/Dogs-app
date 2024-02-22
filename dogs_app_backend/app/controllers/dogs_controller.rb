class DogsController < ApplicationController
    before_action :find_dog, only: [:update, :destroy]

    def index
        @dogs = Dog.all
        render json: @dogs
    end

    def create
        @dog = Dog.create(dog_params)
            # name: params[:name],
            # description: params[:description],
            # age: params[:age],
            # washed: params[:washed],
            # exercised: params[:exercised]
            #^^^ used before dog_params private route created below
        #)

        render json: @dog, status: :created
    end

    def destroy
        @dog = Dog.find(params[:id])
        @dog.destroy
        render status: :no_content
    end

    def update
        # @dog = Dog.find(params[:id])
        @dog.update(dog_params)
        render json: @dog
    end

    private

    def find_dog
        @dog = Dog.find(params[:id])
    end

    def dog_params
        params.require(:dog).permit(:name, :description, :age, :washed, :exercised)
    end
end
