require_relative 'boot'

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"     # <-- Add this to load ActiveRecord
require "action_controller/railtie"
require "action_mailer/railtie"
require "active_storage/engine"
require "action_cable/engine"
# require "sprockets/railtie"       # Comment out if API-only app
require "rails/test_unit/railtie"

# Require gems listed in Gemfile
Bundler.require(*Rails.groups)

module InstagramClone
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
  end
end
