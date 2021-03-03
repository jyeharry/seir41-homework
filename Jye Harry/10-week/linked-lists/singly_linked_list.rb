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
    self.last().next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
  end

  def remove # remove first node or return nil if no nodes
    node = @head
    @head = @head.next
  end

  def insert_after(node, new_value)

  end

  def find(needle)

  end

  def reverse
    reversed_list = SinglyLinkedList.new
    current_node = @head
    while current_node
      reversed_list.prepend(current_node.value)
      current_node = current_node.next
    end
  end

  def reverse!
    @head = self.reverse.head
  end

  def each
    current_node = @head
    index = 0
    while current_node
      yield(current_node.value, index) if block_given?
      current_node = current_node.next
      index += 1
    end
  end

  # bonus: .map .reduce .select .reject
  # bonus: .at_index(i)
end

ll = SinglyLinkedList.new 0
ll.prepend(1)
ll.prepend(2)
ll.prepend(3)
binding.pry
