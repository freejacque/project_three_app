require 'rubygems'
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'] || "development")

require './config/boot'
require './app'

run App
