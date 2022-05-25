class News < ApplicationRecord
  has_many :news_tags, dependent: :destroy
  has_many :tags, through: :news_tags
end
