import { Button, Modal } from "@mui/material";
import { FC, SetStateAction, Dispatch } from "react";
import EditPost from "./EditPost";

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
};

const ModalEdit: FC<ModalProps> = ({ isModalOpen, setIsModalOpen, id }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      hideBackdrop
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <div className="py-2 px-4 shadow-sm bg-slate-300 w-[500px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-end">
          <Button variant="contained" type="submit" onClick={handleClose}>
            <span className="text-2xl font-bold text-gray-400">close</span>
          </Button>
        </div>

        <EditPost id={id} setIsModalOpen={setIsModalOpen} />
      </div>
    </Modal>
  );
};

export default ModalEdit;
