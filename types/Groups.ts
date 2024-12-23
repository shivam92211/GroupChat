type GroupCardProps = {
    groupImage: string;
    groupTitle: string;
    groupInfo: string;
    joinLink?: string;
}


type GroupListItemProps = {
    groupName: string;
    groupDescription: string;
    groupImage: string;
}

type Group = {
    name: string;
    description: string;
    image: string;
  }