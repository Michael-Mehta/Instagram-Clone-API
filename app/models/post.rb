class Post < ApplicationRecord

    belongs_to :user

    has_many :likes, dependent: :destroy

    has_many :liking_users, through: :likes, source: :user

    has_one_attached :image


    def like
        update(likes_count: likes_count + 1)
    end


    def unlike
        update(likes_count: likes_count - 1)
    end

    def liked_by?(user)
        liking_users.include?(user)
      end
end
