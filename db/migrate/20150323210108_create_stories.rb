class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
    	t.string :title 
    	t.string :content 
    	t.references :neighborhood
    	t.string :address

      t.timestamps null: false
    end
  end
end


