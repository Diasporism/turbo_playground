class ApplicationController < ActionController::Base
  layout -> { turbo_frame_request? ? 'turbo' : 'application' }
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
end
