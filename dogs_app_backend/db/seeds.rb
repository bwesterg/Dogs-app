# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Dog.create(name: "Ellie", description: "Black hound mix", age: 1.5, washed: false, exercised: true);
Dog.create(name: "Jack", description: "Golden Retriever", age: 3.0, washed: true, exercised: false);
Dog.create(name: "Rocco", description: "Rottweiler Bernese mix", age: 8, washed: false, exercised: false);