class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :username, presence: true, uniqueness: true

  has_many :posts, foreign_key: :user_id, dependent: :destroy
  has_many :likes
  has_many :comments
  has_one_attached :avatar
  followability
  has_many :follows
  has_many :followed_users, through: :follows

  after_commit :attach_default_avatar, on: [:create]

  def unfollow(user)
    followerable_relationships.where(followable_id: user.id).destroy_all
  end

  def as_json(options = {})
    super(options.merge(methods: [:avatar_url]))
  end

  def avatar_url
    if avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(avatar, only_path: true)
    else
      ActionController::Base.helpers.asset_path('defaultAvatar.jpg')
    end
  end

  private

  def attach_default_avatar
    return if avatar.attached?

    avatar.attach(
      io: File.open(Rails.root.join('app', 'assets', 'images', 'defaultAvatar.jpg')),
      filename: 'defaultAvatar.jpg',
      content_type: 'image/jpeg'
    )
  end
end
