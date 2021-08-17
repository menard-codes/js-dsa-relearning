class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const node1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const node2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// O(n) time
// O(n) space
const addTwoNumbers = (l1, l2, remainder=0) => {
    if (l1 === null && l2 === null) return remainder > 0 ? new ListNode(remainder) : null;
    const digit1 = l1 === null ? 0 : l1.val;
    const digit2 = l2 === null ? 0 : l2.val;
    
    const sum = digit1 + digit2 + remainder;
    const digitSum = sum % 10;
    remainder = Math.floor(sum/10);

    const sumNode = new ListNode(digitSum, addTwoNumbers(l1 === null ? l1 : l1.next, l2 === null ? l2 : l2.next, remainder));
    return sumNode;
};

const a = addTwoNumbers(node1, node2);
console.log(a, '\n\n')
console.log(a.next.next.next.next.next)
