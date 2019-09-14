# frozen_string_literal: true

# Linked List
require 'pry'

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

  # CTCI-2.1: Write code to remove duplicates from an unsorted LinkedList
  def remove_duplicates
    node = @head
    h = Hash.new(0)
    return false unless node.next
    h[@head.data] += 1
    while (node = node.next)
      h[node.data] += 1
      if h[node.data] > 1
        previous_node = find_previous(node.data)
        previous_node.next = previous_node.next.next
      end
    end
  end
end

# TEST 
list = LinkedList.new

list.append('A')
list.append('B')
list.append('A')
list.append('A')
list.append('C')
list.append('D')


puts "Display the list"

list.display

list.remove_duplicates
#list.delete('B')
puts 'Answer should be A B C D'
list.display
#puts 'Detele B'


