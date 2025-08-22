class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection

    def debug_storage
    render json: {
    storage_service: Rails.application.config.active_storage.service,
    account_name: ENV['AZURE_STORAGE_ACCOUNT_NAME'],
    access_key_present: ENV['AZURE_STORAGE_ACCESS_KEY'].present?,
    rails_env: Rails.env,
    gemfile_lock_azure: File.exist?(Rails.root.join('Gemfile.lock')) ? File.read(Rails.root.join('Gemfile.lock')).include?('azure-storage-blob') : false
  }
end



def clear_database
  if Rails.env.production? && params[:confirm] == 'yes'
    user_count = User.count
    attachment_count = ActiveStorage::Attachment.count
    blob_count = ActiveStorage::Blob.count
    
    User.destroy_all
    ActiveStorage::Attachment.destroy_all
    ActiveStorage::Blob.destroy_all
    
    render json: { 
      message: "Database cleared successfully",
      deleted: {
        users: user_count,
        attachments: attachment_count,
        blobs: blob_count
      }
    }
  else
    render json: { error: "Add ?confirm=yes to run this" }
  end
end
end