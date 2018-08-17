      SELECT
        cards.title,
        cards.body,
        priorities.priority_level AS priority,
        statuses.current_status AS status,
        users.first_name AS created_by,
        users.first_name AS assigned_to
      FROM cards
      INNER JOIN priorities ON cards.priority_id = priorities.id
      INNER JOIN statuses ON cards.status_id = statuses.id
      INNER JOIN users ON cards.created_by = users.id
      AND cards.assigned_to = users.id;