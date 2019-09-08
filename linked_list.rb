# frozen_string_literal: true

# Linked List


class Node
  attr_accessor :next
  attr_reader :data

  def initialize(data)
    @data = data
    @next = nil
  end

  def to_s
    "Node with value: #{data}"
  end
end

class LinkedList
  def initialize
    @head = nil
  end

  def append(value)
    if @head
      find_tale.next = Node.new(value)
    else
      @head = Node.new(value)
    end
  end

  def find_tale
    node = @head

    return node if !node.next
    return node if !node.next while (node = node.next)
  end

  def find(value)
    node = @head 

    return false if !node.next
    return node if node.data == value 

    while (node = node.next)
      return node if node.data == value
    end
  end

  def append_after(target, value)
    node = find(target)
    return unless node

    old_next = node.next
    node.next = Node.new(value)
    node.next.next = old_next
  end

  def find_previous(value)
    node = @head 

    return false if !node.next
    return node if node.next.data == value 

    while(node = node.next)
      return node if node.next.data == value
    end
  end

  def delete(value)
    if @head.data == value
      @head = @head.next
    end

    node = find_previous(value)
    node.next = node.next.next
  end

  def display
    node = @head

    puts node
    while (node = node.next)
      puts node
    end
  end
end

# TEST 
list = LinkedList.new

list.append('A')
list.append('B')
list.append('C')
list.append('D')

puts "Display the list"

list.display

list.delete('B')

puts 'Detele B'


