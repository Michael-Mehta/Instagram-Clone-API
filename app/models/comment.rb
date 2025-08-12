class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post 
  delegate :email, to: :user, allow_nil: true

  
end