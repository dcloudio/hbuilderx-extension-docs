# About cloud function upload error "ContentAccessDenied"

In some cases, the cloud function upload prompts the following error:

<img src="/static/snapshots/tutorial/unicloud/ContentAccessDenied.png" class="hd-img" />

## Reason

When HBuilderX uploads cloud functions, it compresses the cloud function folder into a zip package, and then uploads and deploys to the server.

Some special strings in the generated zip package will be reported as viruses by windows defender.

## Solution

Open Windows Security -> Virus & threat protection -> Protection history， as shown below:

<img src="/static/snapshots/tutorial/unicloud/defender_history.png" class="hd-img" />

在[Protection History] window，find [Threat blocked]，click [Allow] in Actions；then upload cloud functions again.

<img src="/static/snapshots/tutorial/unicloud/allow_defender.png" class="hd-img" />
