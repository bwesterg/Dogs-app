Rails.application.routes.draw do
  resources :users
  resources :dogs
  post '/login', to: 'application#login'

end
