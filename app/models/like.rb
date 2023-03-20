class Like < ApplicationRecord

    belongs_to :user

    belongs_to :post, counter_cache: true

    validate :limit_one_like_per_post
  
  private
  
  def limit_one_like_per_post
    if post.likes.exists?(user_id: user_id)
      errors.add(:base, 'Post has already been liked')
    end
  end
  
end