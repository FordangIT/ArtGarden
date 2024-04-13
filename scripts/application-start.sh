  #!/bin/bash
  pm2 describe artgarden > /dev/null
  RUNNING=$?

  if [ "${RUNNING}" -ne 0 ]; then
    pm2 start npm --name "artgarden" -- start
  else
    pm2 reload artgarden
  fi;