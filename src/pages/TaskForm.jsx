
import { Formik, Form } from "formik";
import { createTaskRequest } from "../api/task.api";
import { useTask } from "../context/TaskProvider";

function TaskForm() {
  const {createTask} = useTask()
  
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          createTask(values)
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit , values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit"
            disabled={isSubmitting}
            >{ isSubmitting  ? "Saving...": "Save" }</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TaskForm;
