class Tag < ApplicationRecord
  has_many :news_tags, dependent: :destroy
    has_many :news, through: :news_tags
end
