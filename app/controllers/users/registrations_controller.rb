# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  
  respond_to :json




  def create
    build_resource(sign_up_params)
    resource.avatar.attach(io: File.open('public/pics/defaultAvatar.jpg'), filename: 'defaultAvatar.jpg', content_type: 'image/jpg')
    resource.save
    sign_in(resource_name, resource)
    render json: resource.as_json(include: :avatar)
  end

end
