class ApplicationController < ActionController::API
    
    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token = JWT.encode({user_id: @user.id}, "alps")
            render json: {user: @user, token: @token}, status: :accepted
        else 
            render json: {errors: ['Invalid username or password']}, status: :unauthorized
        end
    end

end
