require 'rubygems'
require 'bundler'
require 'rack/test'

ENV['RACK_ENV'] = 'test'
Bundler.require(:default, ENV['RACK_ENV'])

# require 'rspec'
# require 'capybara/rspec'
require './config/boot'
require './app'

Capybara.app = App

module RSpecMixin
  include Rack::Test::Methods
  def app() described_class end
end

RSpec.configure do |config|
  config.include Capybara::DSL
  config.include RSpecMixin
end
