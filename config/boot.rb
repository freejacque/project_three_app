DB = Sequel.connect("postgres://localhost:5432/project_three_app_development")
Dir["./helpers/*.rb"].each { |helper| require helper }
Dir["./models/*.rb"].each { |model| require model }
