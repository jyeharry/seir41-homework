require 'pry'

class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value)
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value)
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
  end

  def remove # remove first node or return nil if no nodes

  end

  def insert_after(node, new_value)

  end

  def find(needle)

  end

  def reverse

  end

  def reverse!

  end

  def each

  end

  # bonus: .map .reduce .select .reject
  # bonus: .at_index(i)
end

binding.pry
