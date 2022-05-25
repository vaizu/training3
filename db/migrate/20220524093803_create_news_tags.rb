class CreateNewsTags < ActiveRecord::Migration[6.1]
  def change
    create_table :news_tags do |t|
      t.references :news, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
