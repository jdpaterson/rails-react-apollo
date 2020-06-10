class CreatePostReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :post_reviews do |t|
      t.references :post, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :body
      t.integer :rating

      t.timestamps
    end
  end
end
