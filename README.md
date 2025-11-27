# Simple budget (50/30/20)

Hobby tool to track monthly income / expenses and follow the [50/30/20 rule](https://en.wiktionary.org/wiki/50/30/20_rule). Built 
in the spare time to replace my Google Sheets.

## Overview

- Web app
- 1 household scale

### High-level diagram

```mermaid
flowchart LR
    User("User")

    subgraph Frontend["Frontend (Browser)"]
        UI["Web UI"]
    end

    subgraph Backend["Backend (local web server)"]
        API["Backend API"]
        Storage["Persistent storage"]
    end

    User --> | Inputs expenses<br> Sees monthly report | UI
    UI --> API
    API --> Storage
```

## Requirements

### Functional requirements

MVP: 
- CRUD (create-read-update-delete) monthly expenses
- Expense includes: *money*, *timestamp*, *category*, *comment*
- Categories: see [Appendix A](#a-expense-categories)

Out of scope:
- Income tracking

### Quality attributes

MVP: 
- Should just run on my laptop locally
- Does not involve sensitive data

## Technical details

### Entity relationship

```mermaid
erDiagram
    Expense }o--|| Expense_Category : contains
    
    Expense {
        uuid    id                  PK
        numeric amount              "NOT NULL"
        text    currency            "NOT NULL"
        date    date                "NOT NULL"
        text    comment
        uuid    expense_category_id FK "NOT NULL"
    }
    
    Expense_Category {
        uuid id       PK
        text category "NOT NULL"
        enum type     "NOT NULL. One of 'NEEDS', 'WANTS'"
    }
```

Every entity may have metadata attributes like `created_at`, `updated_at`, `deleted_at`.

## Appendix 

### A: Expense categories

| Category           | Type  |
|--------------------|-------|
| Fun / travel       | Wants |
| Groceries          | Needs |
| Health / wellbeing | Needs |
| Other needs        | Needs |
| Rent / utilities   | Needs |
| Restaurants        | Wants |
| Services           | Needs |
| Shopping           | Wants |
| Taxi               | Wants |
| Transportation     | Needs |

