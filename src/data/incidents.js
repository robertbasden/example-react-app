const incidents = [
    { id: 'fe4d5eb6-5779-4ee8-a8e2-2433b28e40d7', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 1' },
    { id: '089d80c8-e2ec-4bc6-8284-d0b827df3401', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 2' },
    { id: '7fd8a1b3-764e-4f74-a183-ef54981fd9e8', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 3' },
    { id: '3f217117-82f0-404e-9b21-9a91b5b1f94a', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 4' },
    { id: 'c2396cd0-f5dc-4d40-9f85-439d63ae955d', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 5' },
    { id: '891fe5ca-ab39-4f43-9c00-822413755160', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 6' },
    { id: 'd42c130c-a982-456b-b95b-d8dede54fd16', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 7' },
    { id: '6489923b-258d-4d37-9294-d9eb885d993f', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 8' },
    { id: '15e4a83b-4de4-478e-b470-f5cdfe10c86d', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 9' },
    { id: '9b8c768e-0791-4476-a832-fd765c7443c4', shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus lacinia. Cras libero libero, congue ut facilisis a, facilisis ut sem. Praesent vitae fringilla mi. Duis sed ipsum luctus, euismod urna eu, euismod quam. Integer molestie sodales nunc et facilisis. Donec iaculis mauris et neque cursus, vitae laoreet urna bibendum. Nunc non hendrerit arcu. Integer luctus risus tortor, semper faucibus ante vulputate a.', title: 'Incident 10' }]

export default incidents