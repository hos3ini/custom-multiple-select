import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() items: any[] = [
    {
      name: "jane",
      age: 20
    },
    {
      name: "john",
      age: 25
    },
    {
      name: "Frank",
      age: 14
    },
    {
      name: "Jack",
      age: 63
    },
    {
      name: "Charlie",
      age: 80
    },
    {
      name: "Charlie",
      age: 24
    },
    {
      name: "Charlie",
      age: 44
    },
    {
      name: "Hank",
      age: 3
    },
    {
      name: "Hank",
      age: 47
    },
    {
      name: "Ivy",
      age: 96
    },
    {
      name: "Hank",
      age: 14
    },
    {
      name: "Bob",
      age: 67
    },
    {
      name: "Frank",
      age: 24
    },
    {
      name: "Grace",
      age: 43
    },
    {
      name: "Ivy",
      age: 9
    },
    {
      name: "Frank",
      age: 46
    },
    {
      name: "Grace",
      age: 96
    },
    {
      name: "Ivy",
      age: 34
    },
    {
      name: "Bob",
      age: 15
    },
    {
      name: "Eve",
      age: 32
    },
    {
      name: "Charlie",
      age: 89
    },
    {
      name: "Bob",
      age: 55
    },
    {
      name: "Grace",
      age: 1
    },
    {
      name: "Ivy",
      age: 25
    },
    {
      name: "Eve",
      age: 48
    },
    {
      name: "Frank",
      age: 57
    },
    {
      name: "Bob",
      age: 31
    },
    {
      name: "Ivy",
      age: 74
    },
    {
      name: "Dave",
      age: 96
    },
    {
      name: "Alice",
      age: 56
    },
    {
      name: "Hank",
      age: 16
    },
    {
      name: "Grace",
      age: 21
    },
    {
      name: "Hank",
      age: 72
    },
    {
      name: "Bob",
      age: 87
    },
    {
      name: "Ivy",
      age: 76
    },
    {
      name: "Frank",
      age: 79
    },
    {
      name: "Alice",
      age: 40
    },
    {
      name: "Ivy",
      age: 45
    },
    {
      name: "Frank",
      age: 65
    },
    {
      name: "Jack",
      age: 48
    },
    {
      name: "Charlie",
      age: 42
    },
    {
      name: "Grace",
      age: 19
    },
    {
      name: "Alice",
      age: 45
    },
    {
      name: "Charlie",
      age: 51
    },
    {
      name: "Jack",
      age: 24
    },
    {
      name: "Ivy",
      age: 51
    },
    {
      name: "Dave",
      age: 43
    },
    {
      name: "Dave",
      age: 14
    },
    {
      name: "Alice",
      age: 44
    },
    {
      name: "Hank",
      age: 43
    }
  ]; // Array of objects to display
  @Input() searchText: string = ''; // Search text input
  @Output() selectedItemsChange = new EventEmitter<any[]>(); // Event to emit selected items

  selectedItems: any[] = []; // Array to hold selected items
  isSelectOpen: boolean = false;

  // Function to filter items based on search text
  filterItems(searchText: string): any[] {
    if (!searchText) {
      return this.items;
    }
    return this.items.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.age.toString().includes(searchText)
    );
  }


  // Function to select all items
  selectAll(check: Event): void {
    const target = check.target as HTMLInputElement;
    const select = target.checked;
    if (select) {
      this.selectedItems = [...this.items];
    } else {
      this.selectedItems = [];
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

  // Function to handle item selection
  selectItem(item: any, check?: Event): void {
    if (check) {
      return;
    }
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    } else {
      this.selectedItems.push(item);
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }


  // Function to handle opening and closing select menu
  openSelect(): void {
    this.isSelectOpen = !this.isSelectOpen
  }
}
