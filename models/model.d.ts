export namespace Users {
  interface Inscription {
     surname: string;
     email: string;
     password: string;
  }
  interface Login {
    email: string;
    password: string;
  }
  interface Account {
    surname?: string;
    email?: string;
    password?: string;
    userId?: string;
    token?: any;
    logged?: boolean;
  }
}

export namespace Tag {
  interface CreateTagVideo {
    tag: string
    mediaId: string;
  }
  interface DestroyTag {
    tagId: string;
  }
}
