class Airline < ApplicationRecord
  has_many :reviews # handles the relationship with Review Model

  before_create :slugify #set slug for airline before created in db

  ## slug airline name
  # creeate slugify method
  def slugify
    self.slug = name.parameterize
  end

  # method to caputre avg score
  def avg_score
    # added this guard for airlines without reveiws
    return 0 unless reviews.count.positive?
    reviews.average(:score).round(2).to_f
  end

end
