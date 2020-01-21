class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date
  belongs_to :type
end